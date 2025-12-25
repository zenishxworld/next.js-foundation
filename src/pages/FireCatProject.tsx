import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Lock, Zap, Code, Shield, Scan, Pocket } from 'lucide-react';

const AuditXProject = () => {
  return (
    <ProjectPageLayout
      title="AuditX – AI-Based Web3 Security Suite"
      subtitle="Comprehensive, real-time security and analysis for the Web3 ecosystem"
      imageUrl="/lovable-uploads/ax.png" // Placeholder image URL
      brandName="Zenish & Hensu"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: AuditX – AI-Based Web3 Security Suite by Zenish</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          As blockchain adoption grows across DeFi, NFTs, and utility-based ecosystems, both developers and investors 
          face challenges in assessing the security, authenticity, and reliability of web3 assets. Traditional audits 
          are expensive and slow, and most users lack tools to verify tokens or inspect suspicious wallets.
          There was a need for a unified, fast, and affordable platform to audit smart contracts, scan tokens, and 
          inspect wallet activity — especially for early-stage projects and non-technical users.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Manual audits and blockchain analysis tools often require expert-level knowledge and take time to produce results. 
        Scams like rug pulls, pump-and-dump tokens, and wallet impersonation are rising rapidly. The market lacked a 
        streamlined solution that could:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>Analyze smart contracts for risks and gas usage</li>
        <li>Verify tokens before buying or promoting them</li>
        <li>Inspect wallets for suspicious or high-risk behavior</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        We developed AuditX, an AI-based web3 security tool offering three powerful modules:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Contract Auditor</h4>
            <p>Automated tool that parses and evaluates Solidity code for vulnerabilities, logic issues, and gas inefficiency.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Scan className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Token Scanner</h4>
            <p>Verifies any ERC-20 token by analyzing its behavior, trust score, and transaction history.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Pocket className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Wallet Inspector</h4>
            <p>Fetches and analyzes data from any public blockchain wallet address for risk signals and credibility.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Code className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI-Enhanced Accuracy</h4>
            <p>Models trained on real audit data improve detection rates and false positive filtering.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>One-Click Audit & Scan – Paste code or address, get results instantly</li>
        <li>Real-Time Data – Live wallet and token tracking via blockchain APIs</li>
        <li>Risk Indicators – Colored labels show Critical, High, Medium, Low severity</li>
        <li>No Sign-up Required – Publicly usable with clean, fast UI</li>
        <li>Modular Interface – Users can use just the module they need</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Fast and Reliable</h4>
            <p>All three tools deliver results in seconds, powered by static analysis and live blockchain data.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Easy to Understand</h4>
            <p>Designed for both developers and non-technical users with human-readable outputs.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Cost-Effective Security</h4>
            <p>Reduces dependence on costly audits or slow manual analysis.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">AI-Augmented Accuracy</h4>
            <p>Models trained on real audit data improve detection rates and false positive filtering.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Continuously Improving</h4>
            <p>Easily extensible with more modules like scam detection, presale audits, or DAO tools.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        AuditX has enabled developers, investors, and small project founders to make faster and safer decisions in the 
        web3 space. With its one-stop dashboard for contract audits, token validation, and wallet inspection, 
        AuditX makes blockchain security accessible and efficient. The platform is live and already helping users 
        avoid scams, optimize smart contracts, and better understand their digital assets — setting a solid foundation 
        for future upgrades and API integrations.
      </p>
    </ProjectPageLayout>
  );
};

export default AuditXProject;
