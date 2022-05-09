const app = new Vue (
    {
        el : '#root',
        data : {
            
            toDoList : [
                {
                    toDo : 'Primo compito da svolgere',
                    done : true,
                },
                {
                    toDo : 'Secondo compito da svolgere',
                    done : false,
                },
                {
                    toDo : 'Terzo compito da svolgere',
                    done : true,
                },
                {
                    toDo : 'Quarto compito da svolgere',
                    done : false,
                }
            ]
        },
        methods : {
            // function che rimuove un toDo al click di X
            removeTodo: function (index) {
                console.log('remove', index);
                this.toDoList.splice(index, 1);

            }
            
        }
    }
)

