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
                    toDo : 'terzo compito da svolgere',
                    done : true,
                },
                {
                    toDo : 'terzo compito da svolgere',
                    done : false,
                }
            ]
        },
        methods : {
            
        }
    }
)

