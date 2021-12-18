const express = require('express')
const app = express()
const port = 5000
//importing data
const data = require("./data.json");
// importing graphql packages
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
const { graphqlHTTP } = require("express-graphql");

// getting the data through Vehicle
const VehicleType = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => ({
    id: {type:GraphQLInt},
    ARAIMileage: { type:GraphQLString},
    bhp: { type:GraphQLString},
    TransmissionType: { type:GraphQLString}, 
  })
})
//creating query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers:{
    type: new GraphQLList(VehicleType),
    args: { id: { type: GraphQLInt}},
    resolve(parent, args) {
      return data
    }
    }
  }
})
// creating a mutation
const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createuser:{
      type: VehicleType,
      args: {
        ARAIMileage: { type:GraphQLString},
        TransmissionType: { type:GraphQLString},
        bhp: { type:GraphQLString},

      },
      resolve(parent,args){
        data.push({id: data.length+1, ARAIMileage:args.ARAIMileage, TransmissionType:args.TransmissionType,bhp:args.bhp})
      return args
      }
    }
  }
})




// creating a schema
const schema = new GraphQLSchema({query:RootQuery,mutation:Mutation})
const cors = require("cors");

app.use(cors());
app.use(express.json());
// creating a route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, //graphiql for GUI
  })
);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
/*app.get('/api', (req, res) => {
  res.json([
      {id:1,username:"somebody"},
      {id:2,username:"somebody else"}
  ])
})*/