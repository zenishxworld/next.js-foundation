import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Bot, LineChart, TrendingUp, DollarSign, Cpu } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="MT5 Trading Automation Bot"
      subtitle="Custom trading automation for forex and futures markets"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png" // Placeholder image URL
      brandName="Professional Trader Client"
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Automated Forex & Futures Trading System</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A professional trader approached our team to develop a custom MT5 automation bot for forex and futures markets. 
          The trader wanted a solution that could analyze market conditions, detect trends, and autonomously place trades 
          according to their requirements, without constant manual monitoring.
          The goal was to build a robust and efficient bot capable of handling live markets while adhering to the client’s trading preferences.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Manual trading in volatile markets is prone to delayed responses and inconsistencies. Existing automation tools lacked 
        multi-timeframe analysis, adaptive trend detection, and real-time trade management.
        The client needed a solution that could:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>Detect market fractal nature and auto directional bias</li>
        <li>Analyze trend and session candle behavior</li>
        <li>Execute trades automatically based on favorable market conditions</li>
        <li>Skip signals if setup criteria were not satisfied</li>
        <li>Maintain modularity for future upgrades</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        We developed a modular MT5 bot that combines advanced market analysis with automated trade execution:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Market Analysis & Signal Detection</h4>
            <p>Detects fractal patterns and auto bias. Monitors trend behavior across multiple sessions and timeframes.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Bot className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automated Trade Execution</h4>
            <p>Places trades automatically. Manages trade size, stop-loss, and take-profit dynamically based on detected signals.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Modular Architecture</h4>
            <p>Built for flexibility and future expansion. Easily integrates new analysis modules or signal detectors.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <DollarSign className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Risk Management Ready</h4>
            <p>Integrates configurable risk management rules (client-defined) for disciplined trading.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">System Components</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>MT5 Expert Advisor (EA) for automated trade management</li>
        <li>Real-time market analysis engine for forex and futures</li>
        <li>Logging dashboard for trade review and performance tracking</li>
        <li>Modular coding to support future strategy additions</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Automated Market Response</h4>
            <p>Executes trades in real-time based on trend, session, and candle behavior.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Consistency & Discipline</h4>
            <p>Maintains consistent trade execution without emotional bias.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Risk Management Ready</h4>
            <p>Integrates configurable risk management rules (client-defined).</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Scalable & Upgradable</h4>
            <p>Modular design allows adding new market modules or signal detectors.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Performance Insights</h4>
            <p>Comprehensive trade logs support evaluation and future optimization.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The MT5 Bot is actively deployed for the client, providing automated trade execution in forex and futures markets. 
        By leveraging fractal patterns, auto bias detection, and session candle behavior, it ensures high-quality trade 
        opportunities are captured while maintaining operational efficiency.
        This version protects the client’s strategy while highlighting the power and sophistication of the bot.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <TrendingUp className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Research Impact</h4>
          <p>
            The bot's performance logs provide crucial data for iterative improvement, demonstrating a clear path for 
            strategy evolution and long-term algorithmic trading success.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;