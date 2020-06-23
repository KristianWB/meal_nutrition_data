


require("dotenv").config()


// Setting up STRIPE handling constants
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

//Setting up STRIPE handling function
export async function handler(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hi there Tacos",
        event
      })
    }
  }

  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    }
  }