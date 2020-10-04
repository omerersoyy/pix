import { Server, Response } from "miragejs"
import config from '../integration-config.json'
import responses from './MockResponses'

if (window.server) {
    server.shutdown()
}

window.server = new Server({
    routes() {
        this.get("/images", () => {
            const images = responses[config.api]

            if(images) {
                return images
            }

            let headers = {}
            let data = { 
                error: ["Not Found"],
                errorCode: 404
            }
            return new Response(404, headers, data)
            
        }, {timing: 500})
    },
})

