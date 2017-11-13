$(function ()
 {
        const vm = new Vue(
            {
            el: '#app',
            data:
            {
                lorem: 'words'
            },
            methods:
             {
                 load()
                 {
                     
                    this.$http.get('https://baconipsum.com/api/?type=meat-and-filler')
                    .then(resp => {
                        this.lorem = resp.body
                    })
                 }
            }
        })
    
    })