import { VideoPlayerProvider } from "@/Context/global_context_provider";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthValidatorWrapper from "@/components/auth/auth_validator_wrapper/auth_validator_wrapper";
import NotificationWrapperComponent from "@/components/notification_wrapper/notification_wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arabic Courses",
  description:
    "Master the Arabic language by learning through top courses with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="RSZBBWk2ueUdhqlat4qVcXKz7MoOLjjQNYDKqyA4SCc"
        />
      </head>
      <body className={inter.className}>
        <VideoPlayerProvider>
          <NotificationWrapperComponent>
            <AuthValidatorWrapper>{children} </AuthValidatorWrapper>
          </NotificationWrapperComponent>
        </VideoPlayerProvider>
      </body>
    </html>
  );
}
