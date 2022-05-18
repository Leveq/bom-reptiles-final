export default {
    name: 'live',
    title: 'Live',
    type: 'document',
    fields: [
        {name: 'name', type: 'string', title: 'Live feeder'},
        {name: 'quantity', type: 'string', title: 'Quantity/Size'},
        {name: 'price', type: 'string', title: 'Price'},
        {name: 'quantity2', type: 'string', title: 'Quantity/Size'},
        {name: 'price2', type: 'string', title: 'Price'},
        {name: 'quantity3', type: 'string', title: 'Quantity/Size'},
        {name: 'price3', type: 'string', title: 'Price'},
        {name: 'quantity4', type: 'string', title: 'Quantity/Size'},
        {name: 'price4', type: 'string', title: 'Price'},
        {name: 'quantity5', type: 'string', title: 'Quantity/Size'},
        {name: 'price5', type: 'string', title: 'Price'},
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