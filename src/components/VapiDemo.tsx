import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const VapiDemo = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [callDuration, setCallDuration] = useState(0);
  const [showVolume, setShowVolume] = useState(false);
  const vapiRef = useRef<any>(null);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize Vapi with public key
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY || '6b197fc0-3d91-4e7b-801d-801097fb79ae';
    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    // Set up event listeners
    vapi.on('call-start', () => {
      setIsConnected(true);
      setIsConnecting(false);
      setMessages([]);
      // Start call timer
      callTimerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    });

    vapi.on('call-end', () => {
      setIsConnected(false);
      setIsConnecting(false);
      if (callTimerRef.current) {
        clearInterval(callTimerRef.current);
        callTimerRef.current = null;
      }
      setCallDuration(0);
    });

    vapi.on('speech-start', () => {
      // User started speaking
    });

    vapi.on('speech-end', () => {
      // User stopped speaking
    });

    vapi.on('message', (message: any) => {
      if (message.type === 'transcript' && message.transcript) {
        const newMessage: Message = {
          role: message.role,
          content: message.transcript,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
      }
    });

    vapi.on('error', (error: any) => {
      console.error('Vapi error:', error);
      setIsConnected(false);
      setIsConnecting(false);
    });

    return () => {
      vapi.stop();
      if (callTimerRef.current) {
        clearInterval(callTimerRef.current);
      }
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current) return;
    
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    
    if (!assistantId || assistantId === 'your-assistant-id-here') {
      alert('Please configure your Vapi Assistant ID in the .env.local file. Go to https://dashboard.vapi.ai to create an assistant.');
      return;
    }
    
    setIsConnecting(true);
    try {
      await vapiRef.current.start(assistantId);
    } catch (error) {
      console.error('Failed to start call:', error);
      alert('Failed to start call. Please check your Vapi configuration.');
      setIsConnecting(false);
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  const toggleMute = () => {
    if (vapiRef.current) {
      vapiRef.current.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (vapiRef.current) {
      vapiRef.current.setVolume(newVolume);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-3xl p-8 max-w-6xl mx-auto relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/50"
         style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)' }}>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-pulse pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side - Call Interface */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 relative overflow-hidden">
            {/* Top status bar */}
            <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${
              isConnected ? 'bg-gradient-to-r from-green-500 to-blue-500 animate-pulse' : 
              isConnecting ? 'bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse' : 
              'bg-gradient-to-r from-gray-600 to-gray-700'
            }`}></div>
            
            <div className="text-center mb-8">
              {/* Call button with animation */}
              <div className="relative inline-block">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                  isConnected ? 'bg-gradient-to-br from-green-500 to-emerald-600 scale-110' : 
                  isConnecting ? 'bg-gradient-to-br from-yellow-500 to-orange-600 animate-pulse scale-105' : 
                  'bg-gradient-to-br from-indigo-500 to-purple-600 hover:scale-110 cursor-pointer'
                }`}
                     onClick={!isConnected && !isConnecting ? startCall : undefined}>
                  {isConnected ? (
                    <Phone className="w-16 h-16 text-white animate-pulse" />
                  ) : isConnecting ? (
                    <Phone className="w-16 h-16 text-white animate-bounce" />
                  ) : (
                    <Phone className="w-16 h-16 text-white" />
                  )}
                </div>
                
                {/* Ripple effect when connected */}
                {isConnected && (
                  <>
                    <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </>
                )}
              </div>
              
              <h3 className={`text-white text-2xl font-bold mb-2 transition-all duration-300 ${
                isConnected ? 'text-green-400' : isConnecting ? 'text-yellow-400' : ''
              }`}>
                {isConnected ? 'Connected' : isConnecting ? 'Connecting...' : 'Try Our AI Agent'}
              </h3>
              
              {isConnected && (
                <p className="text-gray-400 animate-fade-in">
                  {formatDuration(callDuration)}
                </p>
              )}
              
              {!isConnected && !isConnecting && (
                <p className="text-gray-400 animate-fade-in">
                  Click to start a live demo call
                </p>
              )}
            </div>

            {/* Call controls */}
            {isConnected && (
              <div className="flex items-center justify-center space-x-4 mb-6 animate-fade-in">
                <button
                  onClick={toggleMute}
                  className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <MicOff className="w-5 h-5 text-red-400" /> : <Mic className="w-5 h-5 text-white" />}
                </button>

                <button
                  onClick={endCall}
                  className="p-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <PhoneOff className="w-6 h-6 text-white" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowVolume(!showVolume)}
                    className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    title="Volume"
                  >
                    {volume > 0 ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-white" />}
                  </button>
                  
                  {showVolume && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-800 rounded-lg shadow-xl animate-slide-in-up">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-32"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Status indicators */}
            {!isConnected && !isConnecting && (
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span>Ready to connect</span>
              </div>
            )}
          </div>

          {/* Right side - Transcription */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span className="text-white text-sm font-medium">Live Transcription</span>
              </div>
              {isConnected && (
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">Live</span>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 text-center">
                    {isConnected ? 'Waiting for conversation...' : 'Start a call to see live transcription'}
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`animate-slide-in-right ${
                      message.role === 'assistant' ? 'ml-0' : 'ml-auto'
                    }`}
                    style={{ animationDelay: `${index * 100}ms`, maxWidth: '85%' }}
                  >
                    <div className={`rounded-lg p-4 ${
                      message.role === 'assistant'
                        ? 'bg-indigo-500/20 border border-indigo-500/30'
                        : 'bg-blue-500/20 border border-blue-500/30'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          message.role === 'assistant' ? 'bg-indigo-500' : 'bg-blue-500'
                        }`}>
                          {message.role === 'assistant' ? (
                            <span className="text-white text-xs font-bold">AI</span>
                          ) : (
                            <span className="text-white text-xs font-bold">U</span>
                          )}
                        </div>
                        <span className={`font-semibold text-sm ${
                          message.role === 'assistant' ? 'text-indigo-400' : 'text-blue-400'
                        }`}>
                          {message.role === 'assistant' ? 'AI Agent' : 'You'}
                        </span>
                      </div>
                      <p className="text-white text-sm">{message.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-6 text-gray-300 text-sm">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time AI Response</span>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Natural Conversation</span>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Live Transcription</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VapiDemo;

