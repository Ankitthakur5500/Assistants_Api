
const baseurl = "http://localhost:3000"


export const GetAssistant = async () => {
    try {
      const response = await fetch(`${baseurl}/api/assistantID`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      if (!response.ok) {
        console.error("Failed to get assistant")
      }
      const data = await response.json()
      console.log("Assistant retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  }

  export const GetThread = async () => {
    try {
      const response = await fetch(`${baseurl}/api/threadID`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      if (!response.ok) {
        console.error("Failed to get thread")
      }
      const data = await response.json()
      console.log("Thread retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 

  export const CreateMessage = async (threadId,data1) => {
    try {
      // console.log("-->url.js",threadId,data1);
      const response = await fetch(`${baseurl}/api/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: data1,threadId: threadId}),
      })
      if (!response.ok) {
        console.error("Failed to get Message")
      }
      const data = await response.json()
      console.log("Message retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 

  export const Run = async (AssistantId,ThreadId) => {
    try {
      // console.log("-->url.js",AssistantId,ThreadId);
      const response = await fetch(`${baseurl}/api/runs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ AssistantId: AssistantId,ThreadId: ThreadId}),
      })
      if (!response.ok) {
        console.error("Failed to get runID")
      }
      const data = await response.json()
      console.log("Run executed successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 

  export const RunStatus = async (ThreadId,runId) => {
    try {
      // console.log("-->url.js",ThreadId,runId);
      const response = await fetch(`${baseurl}/api/runstatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ThreadId: ThreadId,runId: runId}),
      })
      if (!response.ok) {
        console.error("Failed to get run response")
      }
      const data = await response.json()
      console.log("Run status retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 
  export const Response = async (ThreadId) => {
    try {
      // console.log("-->url.js",ThreadId,runId);
      const response = await fetch(`${baseurl}/api/response`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ThreadId: ThreadId}),
      })
      if (!response.ok) {
        console.error("Failed to get run response")
      }
      const data = await response.json()
      console.log("Run status retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 