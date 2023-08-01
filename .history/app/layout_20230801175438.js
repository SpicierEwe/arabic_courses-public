import { VideoPlayerProvider } from "@/Context/global_context_provider";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthValidatorWrapper from "@/components/auth/auth_validator_wrapper/auth_validator_wrapper";
import NotificationWrapperComponent from "@/components/notification_wrapper/notification_wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthValidatorWrapper>
          <VideoPlayerProvider>
            <NotificationWrapperComponent>children}</VideoPlayerProvider></NotificationWrapperComponent>{
        </AuthValidatorWrapper>
      </body>
    </html>
  );
}
