import { defineConfig } from "rasengan";
import { rasengan } from "rasengan/plugin";
import { configure } from "@rasenganjs/vercel";

// Paquets utilisés uniquement par la scène 3D du hero.
const THREE_DEPS =
	/node_modules\/(three|three-stdlib|three-mesh-bvh|@react-three|react-reconciler|its-fine|zustand|suspend-react|maath|troika-[^/]+|camera-controls|meshline|stats-gl|stats\.js|detect-gpu|hls\.js|@monogrid|@use-gesture|react-use-measure|tunnel-rat|@mediapipe|glsl-noise|use-sync-external-store|webgl-[^/]+|bidi-js|@dimforge)\//;

/**
 * Rasengan impose son propre découpage (tout node_modules dans « vendor », tout
 * src/components dans « shared-components ») et ignore `vite.build`. Ce plugin le
 * remplace pour que three.js et HeroScene restent dans un chunk chargé à la
 * demande au lieu d'alourdir chaque page.
 */
function lazyThreeChunks() {
	return {
		name: "portfolio:lazy-three-chunks",
		config() {
			return {
				build: {
					rollupOptions: {
						output: {
							manualChunks(id) {
								if (THREE_DEPS.test(id) || id.includes("src/components/HeroScene")) return undefined;
								if (id.includes("node_modules")) return "vendor";
								if (id.includes("src/components") || id.includes("src/data") || id.includes("src/lib"))
									return "shared-components";
								return undefined;
							},
						},
					},
				},
			};
		},
	};
}

export default defineConfig({
	vite: {
		plugins: [
			rasengan({
				adapter: configure(),
			}),
			lazyThreeChunks(),
		],
	},
});
