import { RemoteRunnable } from "langchain/runnables/remote";

const chain = new RemoteRunnable({
  url: `https://eve1-1-c9398496.deta.app/db_chat/`,
  options: {
    timeout: 30000,
  },
});
const result = await chain.invoke({
  query: "Find the top 5 products with the highest total sales revenue",
});

console.log(result);
