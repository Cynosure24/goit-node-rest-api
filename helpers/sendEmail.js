import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const { META_PASSWORD } = process.env;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "nadkernychna.sofiia@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

export const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "nadkernychna.sofiia@meta.ua",
  };
  await transport.sendMail(email);
  return true;
};