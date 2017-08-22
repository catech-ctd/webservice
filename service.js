require('seneca')()
   .add(
       { say:"hello world"},
           function( message, done )
              {
                done( null, {message:'hello world'} )
               })
     .listen()