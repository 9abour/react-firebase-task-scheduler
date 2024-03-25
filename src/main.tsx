import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.tsx";
import { AuthProvider } from "./context/authContext.tsx";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./rtk/app/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Toaster position="bottom-right" />
		<AuthProvider>
			<ReduxProvider>
				<AppRoutes />
			</ReduxProvider>
		</AuthProvider>
	</React.StrictMode>
);
