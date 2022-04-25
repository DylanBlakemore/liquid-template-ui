import { nanoid } from 'nanoid'
export const mockState = [
  {
    type: "paragraph",
    children: [
      {
        text: " "
      },
      {
        type: "variable",
        value: "{{ fruits.banana.color }}",
        label: "Fruits > Banana > Color",
        index: "fruits.banana.color",
        children: [
          {
            text: " "
          }
        ],
        id: "d9Ze8pP28dht5evHTo15A"
      },
      {
        text: " is the colour of banana"
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text: ""
      }
    ]
  },
  {
    type: "iteration",
    value: "{% for vegetables_instance in vegetables %}",
    index: "vegetables",
    label: "For each Vegetable",
    children: [
      {
        type: "iteration",
        value: "{% for vegetables_instance_variations_instance in vegetables_instance.variations %}",
        index: "vegetables_instance.variations",
        label: "For each Vegetable variation",
        children: [
          {
            id: "XHGPM9hZn_kf94jf__LS3",
            type: "paragraph",
            context: [{ key: "vegetables", index: "vegetables_instance" }, { key: "vegetables_instance.variations", index: "vegetables_instance_variations_instance"}],
            children: [
              {
                text: " "
              }
            ]
          }
        ]
      },
      {
        id: "XHGPM9hZn_Uzhgwe__LS3",
        type: "paragraph",
        context: [{ key: "vegetables", index: "vegetables_instance" }],
        children: [
          {
            text: " "
          }
        ]
      }
    ],
    id: "XHGPM9hZn_Uzhgwe__LS3-iteration-container"
  },
  {
    type: "paragraph",
    children: [
      {
        text: ""
      }
    ]
  },
  {
    type: "iteration",
    value: "{% for fruits_apple_variations_instance in fruits.apple.variations %}",
    index: "fruits.apple.variations",
    label: "For each Apple > Variation",
    children: [
      {
        id: "xrK9ijrDaaqg1qa5TlOHU",
        type: "paragraph",
        context: [{ key: "fruits.apple.variations", index: "fruits_apple_variations_instance" }],
        children: [
          {
            text: " "
          },
          {
            type: "variable",
            value: "{{ fruits.apple.color }}",
            label: "Fruits > Apple > Color",
            index: "fruits.apple.color",
            children: [
              {
                text: " "
              }
            ],
            id: "B7VqSAO2YQ8_p-9HHizNf"
          },
          {
            text: " "
          }
        ]
      }
    ],
    id: "xrK9ijrDaaqg1qa5TlOHU-iteration-container"
  }
]

export const mockVariables = [
  {
    type: 'iteration',
    index: 'comparison_items',
    label: 'Stimulus',
    items: [
      { index: 'name', label: 'Name', type: 'text' },
      {
        index: 'brand_feeling',
        type: 'group',
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
        type: 'group',
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
    type: 'group',
    label: 'Measures',
    index: 'measures',
    items: [
      {
        index: 'brand_feeling',
        type: 'group',
        label: 'Brand Feeling',
        items: [
          { index: 'name', label: 'Name', type: 'text' },
          { index: 'norm', label: 'Norm', type: 'number' }
        ]
      },
      {
        index: 'purchase_likelihood',
        type: 'group',
        label: 'Purchase Likelihood',
        items: [
          { index: 'name', label: 'Name', type: 'text' },
          { index: 'norm', label: 'Norm', type: 'number' }
        ]
      }
    ]
  },
  {
    type: 'group',
    label: 'Norm',
    index: 'norm',
    items: [
      { index: 'date', type: 'text', label: 'Date' },
      { index: 'conditions', type: 'text', label: 'Conditions' },
      { index: 'count', type: 'number', label: 'Count' },
    ]
  }
]

export const dummyData = {
  comparison_items: [
    {
      name: 'Pepsi new flavour 30s',
      brand_feeling: {
        score: 5.6,
        question_text: 'How did it make you feel about Pepsi?',
        name: 'Brand feeling',
        significance: -1
      },
      purchase_likelihood: {
        score: 8.2,
        question_text: 'How likely would you be to buy the new flavour?',
        name: 'Purchase likelihood',
        significance: 1
      }
    },
    {
      name: 'Pepsi old flavour 30s',
      brand_feeling: {
        score: 8.0,
        question_text: 'How did it make you feel about Pepsi?',
        name: 'Brand feeling',
        significance: 1
      },
      purchase_likelihood: {
        score: 6.2,
        question_text: 'How likely would you be to buy the new flavour?',
        name: 'Purchase likelihood',
        significance: 0
      }
    }
  ],
  measures: {
    brand_feeling: {
      norm: 7.1,
      name: 'Brand feeling',
    },
    purchase_likelihood: {
      norm: 6.3,
      name: 'Purchase likelihood',
    }
  },
  norm: {
    date: '30 October, 2020',
    conditions: 'Country is United States and category is Soft Drinks',
    count: 376
  }
}
