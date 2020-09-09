Broad Infinity Hackathon API
USAGE
   
   
   
   1.  https://hitesh1234tre.herokuapp.com/list
        - gets all list items
        
      

    2.  https://hitesh1234tre.herokuapp.com/add (and then values in URL encoded form )- POST
        - accepted paraments
            - _id  : Unique id of task (auto generated)
            -  name : task name
            -  description : add a description here
            - creator : creator name
            - duration :in Minutes
           -   createdAt : time of creation (Auto generated)

Daily Progress
    DAY-1
    ---
    - setup express sever and mongodb , added end points ,used MongoDB to setup database (TTL to delete node )
    - Pushed on github
    - pushed on heroku
