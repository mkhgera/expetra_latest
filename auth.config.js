// import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
//import { domainName } from "./const/yourDetails";
import { ThirdwebAuthConfig } from "@thirdweb-dev/react";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthConfig({
  privateKey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || "",
  domain: "expetra.org",
});
