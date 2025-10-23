/**
 * Invisible Behavioral Analysis
 * Tracks user behavior patterns to detect bots vs humans
 */

interface BehaviorData {
  mouseMovements: number;
  scrollEvents: number;
  clickEvents: number;
  keyEvents: number;
  timeOnPage: number;
  typingPattern: number[];
}

class BehavioralAnalyzer {
  private behaviorData: BehaviorData = {
    mouseMovements: 0,
    scrollEvents: 0,
    clickEvents: 0,
    keyEvents: 0,
    timeOnPage: 0,
    typingPattern: []
  };

  private startTime: number = Date.now();

  constructor() {
    this.initializeTracking();
  }

  private initializeTracking(): void {
    // Mouse movement tracking (invisible)
    document.addEventListener('mousemove', () => {
      this.behaviorData.mouseMovements++;
    }, { passive: true });

    // Scroll tracking (invisible)
    document.addEventListener('scroll', () => {
      this.behaviorData.scrollEvents++;
    }, { passive: true });

    // Click tracking (invisible)
    document.addEventListener('click', () => {
      this.behaviorData.clickEvents++;
    }, { passive: true });

    // Typing pattern analysis (invisible)
    document.addEventListener('keydown', (e) => {
      this.behaviorData.keyEvents++;
      this.behaviorData.typingPattern.push(Date.now());
    }, { passive: true });
  }

  public analyzeBehavior(): { isHuman: boolean; confidence: number } {
    const timeOnPage = Date.now() - this.startTime;
    this.behaviorData.timeOnPage = timeOnPage;

    // Calculate human-like behavior score
    const mouseScore = Math.min(this.behaviorData.mouseMovements / 10, 1);
    const scrollScore = Math.min(this.behaviorData.scrollEvents / 3, 1);
    const interactionScore = Math.min(
      (this.behaviorData.clickEvents + this.behaviorData.keyEvents) / 5, 1
    );
    const timeScore = Math.min(timeOnPage / 10000, 1); // 10 seconds minimum

    // Analyze typing patterns
    const typingVariance = this.calculateTypingVariance();
    const typingScore = Math.min(typingVariance / 100, 1);

    const totalScore = (mouseScore + scrollScore + interactionScore + timeScore + typingScore) / 5;
    
    return {
      isHuman: totalScore > 0.3,
      confidence: totalScore
    };
  }

  private calculateTypingVariance(): number {
    if (this.behaviorData.typingPattern.length < 2) return 0;
    
    const intervals = [];
    for (let i = 1; i < this.behaviorData.typingPattern.length; i++) {
      intervals.push(this.behaviorData.typingPattern[i] - this.behaviorData.typingPattern[i-1]);
    }
    
    const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const variance = intervals.reduce((sum, interval) => sum + Math.pow(interval - avg, 2), 0) / intervals.length;
    
    return Math.sqrt(variance);
  }
}

export const behavioralAnalyzer = new BehavioralAnalyzer();
