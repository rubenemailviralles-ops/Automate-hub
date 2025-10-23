/**
 * Master Invisible Protection System
 * Integrates all protection measures without visual changes
 */

import { addHoneypotToForm, checkHoneypot, addHoneypotToAllForms } from './honeypot';
import { behavioralAnalyzer } from './behavioralAnalysis';
import { detectAdvancedBots, detectDevTools, detectCopyAttempts, detectSuspiciousActivity } from './advancedBotDetection';
import { obfuscateContent, addInvisibleWatermark, protectImages, addAntiDebugging, addCopyProtection, addInvisibleTracking } from './contentProtection';

export class InvisibleProtection {
  private isInitialized = false;

  public initialize(): void {
    if (this.isInitialized) return;
    
    // Initialize all protection measures (invisible)
    this.setupHoneypotProtection();
    this.setupBehavioralAnalysis();
    this.setupBotDetection();
    this.setupContentProtection();
    this.setupAntiDebugging();
    this.setupCopyProtection();
    this.setupInvisibleTracking();
    
    this.isInitialized = true;
  }

  private setupHoneypotProtection(): void {
    // Add honeypot to all forms (invisible)
    addHoneypotToAllForms();
    
    // Monitor for new forms
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'FORM') {
              addHoneypotToForm(element as HTMLFormElement);
            }
            // Check for forms in added nodes
            const forms = element.querySelectorAll?.('form');
            forms?.forEach(form => {
              addHoneypotToForm(form as HTMLFormElement);
            });
          }
        });
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private setupBehavioralAnalysis(): void {
    // Start behavioral analysis (invisible)
    setInterval(() => {
      const analysis = behavioralAnalyzer.analyzeBehavior();
      if (!analysis.isHuman) {
        this.logSuspiciousActivity('behavioral_analysis', {
          confidence: analysis.confidence
        });
      }
    }, 5000);
  }

  private setupBotDetection(): void {
    // Advanced bot detection (invisible)
    const botDetection = detectAdvancedBots();
    if (botDetection.isBot) {
      this.logSuspiciousActivity('bot_detected', {
        botType: botDetection.botType
      });
    }

    // Dev tools detection (invisible)
    if (detectDevTools()) {
      this.logSuspiciousActivity('dev_tools_detected');
    }

    // Copy attempt detection (invisible)
    if (detectCopyAttempts()) {
      this.logSuspiciousActivity('copy_attempts_detected');
    }

    // Suspicious activity detection (invisible)
    if (detectSuspiciousActivity()) {
      this.logSuspiciousActivity('suspicious_activity_detected');
    }
  }

  private setupContentProtection(): void {
    // Content obfuscation (invisible)
    obfuscateContent();
    
    // Invisible watermark
    addInvisibleWatermark();
    
    // Image protection
    protectImages();
  }

  private setupAntiDebugging(): void {
    // Anti-debugging measures (invisible)
    addAntiDebugging();
  }

  private setupCopyProtection(): void {
    // Copy protection (invisible)
    addCopyProtection();
  }

  private setupInvisibleTracking(): void {
    // Invisible tracking (invisible)
    addInvisibleTracking();
  }

  private logSuspiciousActivity(type: string, details?: any): void {
    // Log to security system (invisible)
    console.log('Security Event:', {
      type,
      details,
      timestamp: new Date().toISOString()
    });
  }
}

// Initialize protection automatically (invisible)
export const invisibleProtection = new InvisibleProtection();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    invisibleProtection.initialize();
  });
} else {
  invisibleProtection.initialize();
}
