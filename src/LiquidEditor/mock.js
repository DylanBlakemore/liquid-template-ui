export const mockChunkedData = [
  {
    type: 'paragraph',
    children: [
      { type: 'text', children: [{text: 'The best fruit is '}]},
      { type: 'variable', value: '{{ fruits.banana }}', children: [{text: 'banana'}] },
      { type: 'text', children: [{text: '.'}]},
    ]
  },
  {
    type: 'loop',
    title: 'For each stim',
    value: '{% for each stim in stimuli %}',
    children: [
      {
        type: 'paragraph',
        children: [
          { type: 'variable', value: '{{ stim.label }}', children: [{text: 'stim label'}]},
          { type: 'text', children: [{text: ' scored'}]}
        ]
      },
      {
        type: 'loop',
        title: 'For each measure',
        value: '{% for each measure in stim.measures %}',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'variable', value: '{{ measure.mean }}', children: [{text: 'measure mean'}] },
              { type: 'text', children: [{text: ' for '}]},
              { type: 'variable', value: '{{ measure.label }}', children: [{text: 'measure name' }]},
              { type: 'text', children: [{text: ', '}]}
            ]
          }
        ]
      },
    ]
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', children: [{text: 'The worst fruit is '}]},
      { type: 'variable', value: '{{ fruits.apple }}', children: [{text: 'apple' }]},
      { type: 'text', children: [{text: '!'}]}
    ]
  }
]
