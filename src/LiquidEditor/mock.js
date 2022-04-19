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
    label: 'Stimuli',
    singular: 'Stimulus',
    items: [
      { index: 'name', label: 'Name', type: 'variable', data_type: 'text' },
      {
        index: 'brand_feeling',
        type: 'group',
        label: 'Brand Feeling',
        items: [
          { index: 'name', label: 'Name', type: 'variable', data_type: 'text' },
          { index: 'question_text', label: 'Question text', type: 'variable', data_type: 'text' },
          { index: 'score', label: 'Score', type: 'variable', data_type: 'number' },
          { index: 'significance', label: 'Significance', type: 'variable', data_type: 'number' }
        ]
      },
      {
        index: 'puchase_likelihood',
        type: 'group',
        label: 'Purchase Likelihood',
        items: [
          { index: 'name', label: 'Name', type: 'variable', data_type: 'text' },
          { index: 'question_text', label: 'Question text', type: 'variable', data_type: 'text' },
          { index: 'score', label: 'Score', type: 'variable', data_type: 'number' },
          { index: 'significance', label: 'Significance', type: 'variable', data_type: 'number' }
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
          { index: 'name', label: 'Name', type: 'variable', data_type: 'text' },
          { index: 'norm', label: 'Norm', type: 'variable', data_type: 'number' }
        ]
      },
      {
        index: 'puchase_likelihood',
        type: 'group',
        label: 'Purchase Likelihood',
        items: [
          { index: 'name', label: 'Name', type: 'variable', data_type: 'text' },
          { index: 'norm', label: 'Norm', type: 'variable', data_type: 'number' }
        ]
      }
    ]
  },
  {
    type: 'group',
    label: 'Norm',
    index: 'norm',
    items: [
      { index: 'date', type: 'variable', data_type: 'text', label: 'Date' },
      { index: 'conditions', type: 'variable', data_type: 'text', label: 'Conditions' },
      { index: 'count', type: 'variable', data_type: 'number', label: 'Count' },
    ]
  }
]
