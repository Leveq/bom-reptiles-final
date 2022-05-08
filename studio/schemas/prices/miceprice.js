export default {
    name: 'mice',
    title: 'Mice',
    type: 'document',
    fields: [
        {name: 'name', type: 'string', title: 'Mouse name'},
        {name: 'quantity', type: 'string', title: 'Quantity'},
        {name: 'price', type: 'string', title: 'Price'},
        {name: 'quantity6', type: 'string', title: 'Quantity(6)'},
        {name: 'price6', type: 'string', title: 'Price'},
        {name: 'quantity12', type: 'string', title: 'Quantity(12)'},
        {name: 'price12', type: 'string', title: 'Price'},
        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'string'
             }
           ]
          },
    ]
}