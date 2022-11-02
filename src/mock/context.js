export const value1 = [
  
]

export const measureContext = [
  {
    type: 'list',
    index: 'comparison_items',
    label: 'Stimulus',
    items: [
      { index: 'name', label: 'Name', type: 'text' },
      {
        index: 'brand_feeling',
        type: 'object',
        label: 'Brand Feeling',
        items: [
          { index: 'name', label: 'Name', type: 'text' },
          { index: 'question_text', label: 'Question text', type: 'text' },
          { index: 'score', label: 'Score', type: 'number' },
          { index: 'significance', label: 'Significance', type: 'number' }
        ]
      },
      {
        index: 'purchase_likelihood',
        type: 'object',
        label: 'Purchase Likelihood',
        items: [
          { index: 'name', label: 'Name', type: 'text' },
          { index: 'question_text', label: 'Question text', type: 'text' },
          { index: 'score', label: 'Score', type: 'number' },
          { index: 'significance', label: 'Significance', type: 'number' }
        ]
      }
    ]
  },
  {
    index: 'brand_feeling',
    type: 'object',
    label: 'Brand Feeling',
    items: [
      { index: 'name', label: 'Name', type: 'text' },
      { index: 'norm', label: 'Norm', type: 'number' }
    ]
  },
  {
    index: 'purchase_likelihood',
    type: 'object',
    label: 'Purchase Likelihood',
    items: [
      { index: 'name', label: 'Name', type: 'text' },
      { index: 'norm', label: 'Norm', type: 'number' }
    ]
  },
  {
    type: 'object',
    label: 'Norm',
    index: 'norm',
    items: [
      { index: 'date', type: 'text', label: 'Date' },
      { index: 'conditions', type: 'text', label: 'Conditions' },
      { index: 'count', type: 'number', label: 'Count' },
    ]
  }
]
