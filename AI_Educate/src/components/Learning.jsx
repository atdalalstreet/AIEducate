import { useEffect, useRef } from 'react'

export default function Learning() {
  const tools = [
    { name: 'Github', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Python', logo: 'https://www.python.org/static/community_logos/python-logo-generic.svg' },
    { name: 'Stable Diffusion', logo: 'https://stability.ai/favicon.ico' },
    { name: 'Midjourney', logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_black_RGB.svg' },
    { name: 'scikit-learn', logo: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png' },
    { name: 'XGBoost', logo: 'https://xgboost.ai/images/logo/xgboost-logo.png' },
    { name: 'LangChain', logo: 'https://python.langchain.com/img/favicon.ico' },
    { name: 'DreamBooth', logo: 'https://dreambooth.github.io/DreamBooth_files/teaser.jpg' },
    { name: 'Lora', logo: 'https://raw.githubusercontent.com/microsoft/LoRA/main/docs/lora_logo.png' },
    { name: 'MLflow', logo: 'https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png' },
    { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/favicon.png' },
    { name: 'Flask', logo: 'https://flask.palletsprojects.com/en/2.3.x/_static/flask-icon.png' },
    { name: 'LlamaIndex', logo: 'https://raw.githubusercontent.com/jerryjliu/llama_index/main/docs/_static/llama_index.png' },
    { name: 'Weaviate', logo: 'https://weaviate.io/img/site/weaviate-logo.png' },
    { name: 'RAG', logo: 'https://raw.githubusercontent.com/microsoft/rag/main/docs/images/rag_logo.png' },
    { name: 'Weights & Biases', logo: 'https://wandb.ai/favicon.ico' },
    { name: 'Autogen', logo: 'https://microsoft.github.io/autogen/img/autogen.svg' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
            Tools & Frameworks
          </span>
          
          <h2 className="text-4xl font-bold mt-6 mb-4">
            What will you <span className="text-primary">master?</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-mono">
            Through these tools and frameworks, master the ultimate skill—thinking like a problem-solving AI innovator!
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll-infinite">
            {[...tools, ...tools].map((tool, index) => (
              <div 
                key={index}
                className="flex-none w-32 text-center group"
              >
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-16 h-16 object-contain mx-auto mb-3"
                  />
                  <p className="text-sm font-mono text-gray-600 group-hover:text-primary transition-colors">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
