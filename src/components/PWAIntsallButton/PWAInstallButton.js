import React, { useState, useEffect } from "react";
import "./PWAInstallButton.css";

const PWAInstallButton = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null);
	const [showInstallButton, setShowInstallButton] = useState(false);
	const [isInstalled, setIsInstalled] = useState(false);

	useEffect(() => {
		// Check if app is already installed
		const checkIfInstalled = () => {
			if (
				window.matchMedia("(display-mode: standalone)").matches ||
				window.navigator.standalone === true
			) {
				setIsInstalled(true);
				return;
			}
		};

		// Listen for the beforeinstallprompt event
		const handleBeforeInstallPrompt = (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Store the event so it can be triggered later
			setDeferredPrompt(e);
			// Show the install button
			setShowInstallButton(true);
		};

		// Listen for the appinstalled event
		const handleAppInstalled = () => {
			setIsInstalled(true);
			setShowInstallButton(false);
			setDeferredPrompt(null);
			console.log("PWA was installed");
		};

		checkIfInstalled();

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		window.addEventListener("appinstalled", handleAppInstalled);

		// Cleanup event listeners
		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt
			);
			window.removeEventListener("appinstalled", handleAppInstalled);
		};
	}, []);

	const handleInstallClick = async () => {
		if (!deferredPrompt) return;

		// Show the install prompt
		deferredPrompt.prompt();

		// Wait for the user to respond to the prompt
		const { outcome } = await deferredPrompt.userChoice;

		if (outcome === "accepted") {
			console.log("User accepted the install prompt");
		} else {
			console.log("User dismissed the install prompt");
		}

		// Clear the deferredPrompt so it can only be used once
		setDeferredPrompt(null);
		setShowInstallButton(false);
	};

	// Don't render anything if the app is already installed or if we shouldn't show the button
	if (isInstalled || !showInstallButton) {
		return null;
	}

	return (
		<button
			className="pwa-install-button"
			onClick={handleInstallClick}
			aria-label="Install Portfolio App"
		>
			<svg
				className="install-icon"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
					fill="currentColor"
				/>
			</svg>
			Install App
		</button>
	);
};

export default PWAInstallButton;
