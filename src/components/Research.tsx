import { FC } from 'react'
import './Research.css'

interface ResearchProps {
  isActive: boolean
}

const researchData = [
  {
    id: 1,
    title: `Parallelized Feature Level Fusion of Transformers (MedViT2, MedFormer, DiET)
      for Medical Image Classification`,
    venue: 'Targeting upcoming conference (e.g., CVPR, NeurIPS)',
    year: '2026',
    status: 'Ongoing',
    description: `This research focuses on enhancing the performance of transformer-based
      models for medical image classification. The primary objective is to develop
      a parallelized feature-level fusion mechanism that can effectively integrate
      multi-scale features extracted from different models. By leveraging parallel
      processing, we aim to reduce the computational overhead typically associated
      with deep transformer models while improving their ability to capture
      fine-grained details crucial for accurate medical diagnosis. The study explores
      feature level fusion, to identify the most effective approach for combining
      feature maps from different transformer models. Additionally, we investigate
      the use of transformer architectures and optimization techniques to ensure
      the model remains computationally efficient and suitable for deployment in
      clinical settings. The expected outcome is a novel fusion framework that
      achieves state-of-the-art accuracy in medical image classification tasks
      while maintaining low latency and computational requirements.`,
    link: '', // No link needed for ongoing research
  }
]

const Research: FC<ResearchProps> = ({ isActive }) => {
  return (
    <section className={`research-section sec-padding ${isActive ? 'active' : ''}`} id="research">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Research Experience</h2>
          </div>
        </div>

        <div className="row">
          <div className="research-list">
            {researchData.map((item) => (
              <div key={item.id} className="research-item">
                <div className="research-item-header">
                  <h3 className="research-title">{item.title}</h3>
                  <span className="research-year">{item.year}</span>
                </div>

                <h4 className="research-venue">{item.venue}</h4>

                <p className="research-desc">{item.description}</p>

                <div className="research-footer">
                  <span className={`research-status ${item.status === 'Published' ? 'status-published' : 'status-ongoing'}`}>
                    {item.status}
                  </span>

                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn research-btn">
                      Read Paper
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
