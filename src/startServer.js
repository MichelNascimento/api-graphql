import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { user, pass } from '../config'

function startServer({ typeDefs, resolvers }) {
    mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-e6zxv.mongodb.net/Graphql?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))
}

export default startServer;