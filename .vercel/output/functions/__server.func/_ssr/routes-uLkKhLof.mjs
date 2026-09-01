import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uLkKhLof.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	title: "Happy 17th, Pragya!",
	eyebrow: "17 saal ki ho gayi",
	heading: "Happy Birthday",
	name: "Pragya!",
	sub: "apni sabse chaotic, sabse pyaari bestie ke liye ek chhota sa (par bharpoor) internet card. scroll kar aur dekh apna hi highlight reel",
	scrollCue: "scroll for the chaos",
	galleryLead: "this year's most iconic moments, curated with love (and zero chill)",
	letterTitle: "ek chhota sa paigaam",
	letterP1: "Pragya, 17 pura hone par tujhe ready-to-explode-with-happiness wali birthday wishes tere jitna funny, genuine aur chaotic dost dhundhna literally impossible hai — aur main lucky hu ki wo mujhe mil gaya.",
	letterP2: "yeh saal tera sabse best jaaye — utni hi masti, utni hi memes, aur haan, thoda kam \"mujhe kya mei to AI hu\" wala drama",
	signoff: "happy birthday bestie, love you tons",
	from: "— Garvit",
	mastiBtn: "TAP FOR MASTI",
	mastiHint: "(go on, you deserve it today)",
	footer: "made with too much love (and Hinglish) by Garvit"
};
var FEATURED = {
	id: "featured",
	src: "/photos/pragya-01.jpg",
	alt: "Pragya and a friend sharing pizza",
	caption: "Aaj hi Nasha Chhode",
	rotate: -3.5
};
var GALLERY = [
	{
		id: "g1",
		src: "/photos/pragya-02.jpg",
		alt: "Pragya smiling, holding a drink",
		caption: "17 saal ki ho gayi... finally",
		rotate: -6
	},
	{
		id: "g2",
		src: "/photos/pragya-03.jpg",
		alt: "Pragya sitting on a sofa, smiling",
		rotate: 5
	},
	{
		id: "g3",
		src: "/photos/pragya-05.jpg",
		alt: "Pragya holding a drink, looking at the camera",
		caption: "certified heartthrob fr fr",
		rotate: 3
	},
	{
		id: "g4",
		src: "/photos/pragya-04.jpg",
		alt: "Pragya with a friend at night",
		rotate: -2.5
	}
];
var CLOSING_PHOTO = {
	id: "closing",
	src: "/photos/pragya-06.jpg",
	alt: "Pragya laughing with a friend at night",
	rotate: -2
};
var MASTI_PHOTOS = [
	{
		id: "oh-no",
		src: "/photos/masti-oh-no.jpg",
		alt: "Oh noooo, kya Pragya mujhse baat kregi",
		rotate: "-8deg",
		left: "18%",
		top: "8%",
		fromX: "-80vw",
		fromY: "18vh",
		midX: "-14px",
		midY: "10px",
		fromR: "-28deg",
		z: 4
	},
	{
		id: "east-west",
		src: "/photos/masti-east-west.jpg",
		alt: "East or West Pragya is Gayest",
		rotate: "7deg",
		left: "48%",
		top: "6%",
		fromX: "80vw",
		fromY: "-22vh",
		midX: "12px",
		midY: "14px",
		fromR: "24deg",
		z: 5
	},
	{
		id: "pitegi",
		src: "/photos/masti-pitegi.jpg",
		alt: "Pitegi ek din",
		rotate: "5deg",
		left: "20%",
		top: "44%",
		fromX: "-70vw",
		fromY: "40vh",
		midX: "10px",
		midY: "-8px",
		fromR: "18deg",
		z: 3
	},
	{
		id: "baddie",
		src: "/photos/masti-baddie.jpg",
		alt: "Asli baddie to aap ho",
		rotate: "-6deg",
		left: "47%",
		top: "40%",
		fromX: "75vw",
		fromY: "34vh",
		midX: "-10px",
		midY: "-12px",
		fromR: "-22deg",
		z: 6
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Polaroid({ photo, className, tape = "center", onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("polaroid", photo.caption && "has-cap", className),
		style: { ["--r"]: `${photo.rotate}deg` },
		onClick: () => onOpen?.(photo),
		"aria-label": photo.caption ? `${photo.alt}. ${photo.caption}` : photo.alt,
		children: [
			tape !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("tape", tape === "left" && "left", tape === "right" && "right", tape === "blush" && "blush"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.src,
				alt: "",
				draggable: false
			}),
			photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cap",
				children: photo.caption
			}) : null
		]
	});
}
function Heart({ className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		style,
		width: "22",
		height: "20",
		viewBox: "0 0 22 20",
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 17.5C11 17.5 2.2 12.2 2.2 6.9C2.2 4.4 4.1 2.7 6.4 2.7C8 2.7 9.4 3.5 11 5.3C12.6 3.5 14 2.7 15.6 2.7C17.9 2.7 19.8 4.4 19.8 6.9C19.8 12.2 11 17.5 11 17.5Z",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinejoin: "round"
		})
	});
}
function StarBurst({ className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		style,
		width: "18",
		height: "18",
		viewBox: "0 0 18 18",
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9 1.2v15.6M1.2 9h15.6M3.4 3.4l11.2 11.2M14.6 3.4 3.4 14.6",
			stroke: "currentColor",
			strokeWidth: "1.3",
			strokeLinecap: "round"
		})
	});
}
function ScribbleArrow({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "78",
		height: "36",
		viewBox: "0 0 78 36",
		fill: "none",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M3 22c18-16 38-18 62-8",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M56 8c6 4 10 8 12 14-6-1-12-1-16 1",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function Hero({ onOpen }) {
	const frame = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = frame.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - .5;
			const y = (e.clientY - r.top) / r.height - .5;
			el.style.setProperty("--px", `${x * 10}px`);
			el.style.setProperty("--py", `${y * 8}px`);
		};
		const onLeave = () => {
			el.style.setProperty("--px", "0px");
			el.style.setProperty("--py", "0px");
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerleave", onLeave);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[92svh] flex-col items-center justify-center px-1 pb-36 pt-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				className: "float-speck text-rose",
				style: {
					top: "11%",
					left: "8%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarBurst, {
				className: "float-speck text-peach",
				style: {
					top: "16%",
					right: "10%",
					animationDelay: "1.2s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				className: "float-speck text-blush-deep",
				style: {
					bottom: "18%",
					left: "12%",
					animationDelay: "0.6s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarBurst, {
				className: "float-speck text-rose",
				style: {
					bottom: "22%",
					right: "9%",
					animationDelay: "1.8s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow-sticker mb-6",
				children: COPY.eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-[clamp(2.6rem,11vw,5.4rem)] font-bold italic leading-[0.92] text-balance text-wine",
				children: [COPY.heading, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-hand text-[clamp(3.2rem,14vw,6.2rem)] font-semibold not-italic leading-[0.9] text-ink",
					children: COPY.name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[26rem] text-[0.98rem] leading-relaxed text-ink-soft text-pretty",
				children: COPY.sub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: frame,
				className: "relative mt-10 w-[min(320px,74vw)]",
				style: {
					transform: "translate(var(--px, 0px), var(--py, 0px))",
					transition: "transform 500ms var(--ease-out-soft)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute -left-16 top-8 hidden text-rose sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScribbleArrow, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute -left-[4.6rem] top-2 hidden rotate-[-12deg] font-hand text-[1.15rem] text-wine sm:block",
						children: "this one"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polaroid, {
						photo: FEATURED,
						tape: "blush",
						onOpen,
						className: "w-full"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#memories",
				className: "scroll-cue mt-12 inline-flex items-center gap-1 font-hand text-[1.15rem] text-ink-soft no-underline",
				children: [COPY.scrollCue, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					size: 16,
					strokeWidth: 1.75
				})]
			})
		]
	});
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOn(true);
			return;
		}
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", on && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Gallery({ onOpen }) {
	const [a, b, c, d] = GALLERY;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "memories",
		className: "relative z-0 pb-8 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "p",
				className: "relative z-20 mx-auto mb-12 max-w-[24rem] bg-cream/90 px-5 py-3 text-center font-hand text-[1.7rem] leading-snug text-ink",
				children: [
					"this year's ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "not-italic text-wine",
						children: "most iconic"
					}),
					" moments, curated with love (and zero chill)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: COPY.galleryLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 items-start gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 40,
						className: "mt-6 sm:mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polaroid, {
							photo: a,
							tape: "left",
							onOpen
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polaroid, {
							photo: b,
							tape: "right",
							onOpen
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						className: "col-span-2 mx-auto w-[min(300px,78%)] sm:w-[min(320px,56%)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polaroid, {
							photo: c,
							tape: "blush",
							onOpen
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 60,
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "filmstrip mx-auto w-[min(520px,100%)] cursor-zoom-in transition-transform duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1",
							onClick: () => onOpen(d),
							"aria-label": d.alt,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.src,
								alt: "",
								draggable: false
							})
						})
					})
				]
			})
		]
	});
}
function Letter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		as: "section",
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "letter",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "wax",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-0 grid place-items-center text-[13px] leading-none text-cream",
						children: "✦"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-hand text-[2rem] leading-none text-wine",
					children: COPY.letterTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[1.02rem] leading-[1.75] text-ink text-pretty",
					children: COPY.letterP1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1.02rem] leading-[1.75] text-ink text-pretty",
					children: COPY.letterP2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "signoff mt-7 font-hand text-[1.35rem] leading-snug text-wine",
					children: [
						COPY.signoff,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						COPY.from
					]
				})
			]
		})
	});
}
var COLORS = [
	"#7A3A44",
	"#C27A76",
	"#E3B496",
	"#E7C4BE",
	"#FBF6EE",
	"#cfe8de"
];
function Masti() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [tick, setTick] = (0, import_react.useState)(0);
	const canvasRef = (0, import_react.useRef)(null);
	const parts = (0, import_react.useRef)([]);
	const raf = (0, import_react.useRef)(0);
	const reduced = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}, []);
	const burst = (0, import_react.useCallback)(() => {
		const c = canvasRef.current;
		if (!c) return;
		const cx = c.width / 2;
		const cy = c.height * .38;
		for (let i = 0; i < 90; i++) parts.current.push({
			x: cx + (Math.random() - .5) * 80,
			y: cy,
			vx: (Math.random() - .5) * 11,
			vy: Math.random() * -11 - 3,
			g: .18 + Math.random() * .14,
			rot: Math.random() * 360,
			vr: (Math.random() - .5) * 12,
			w: 5 + Math.random() * 7,
			h: 8 + Math.random() * 10,
			color: COLORS[i % COLORS.length],
			life: 150,
			max: 150
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);
		const loop = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			parts.current.forEach((p) => {
				p.vy += p.g;
				p.x += p.vx;
				p.y += p.vy;
				p.rot += p.vr;
				p.life--;
				ctx.save();
				ctx.translate(p.x, p.y);
				ctx.rotate(p.rot * Math.PI / 180);
				ctx.globalAlpha = Math.max(0, p.life / p.max);
				ctx.fillStyle = p.color;
				ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
				ctx.restore();
			});
			parts.current = parts.current.filter((p) => p.life > 0 && p.y < canvas.height + 40);
			raf.current = requestAnimationFrame(loop);
		};
		if (!reduced.current) raf.current = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf.current);
			window.removeEventListener("resize", resize);
		};
	}, []);
	const close = (0, import_react.useCallback)(() => setOpen(false), []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [open, close]);
	const fire = () => {
		if (!reduced.current) burst();
		setOpen(true);
		setTick((n) => n + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "press-wrap py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 font-hand text-xl text-ink-soft",
					children: "a little chaos, as a treat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "masti-btn",
					onClick: fire,
					"aria-expanded": open,
					children: COPY.mastiBtn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3.5 text-[0.82rem] text-ink-soft",
					children: COPY.mastiHint
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			id: "confetti",
			ref: canvasRef,
			"aria-hidden": true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `masti-overlay ${open ? "open" : ""}`,
			"aria-hidden": !open,
			role: "dialog",
			"aria-label": "Masti photo surprise",
			onClick: close,
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "close-masti",
				onClick: close,
				"aria-label": "Close photo collage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					size: 20,
					strokeWidth: 1.75
				})
			}), MASTI_PHOTOS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: `pop-photo ${reduced.current ? "settled" : "flying"}`,
				"data-slot": p.id,
				style: {
					left: p.left,
					top: p.top,
					zIndex: p.z,
					animationDelay: reduced.current ? "0ms" : `${i * 110}ms`,
					["--rotation"]: p.rotate,
					["--from-x"]: p.fromX,
					["--from-y"]: p.fromY,
					["--mid-x"]: p.midX,
					["--mid-y"]: p.midY,
					["--from-r"]: p.fromR,
					["--float-delay"]: `${i * -.45}s`
				},
				onClick: (e) => e.stopPropagation(),
				onAnimationEnd: (e) => {
					if (e.animationName === "photoFly" && !reduced.current) {
						e.currentTarget.classList.remove("flying");
						e.currentTarget.classList.add("settled");
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.src,
					alt: p.alt,
					draggable: false
				})
			}, `${p.id}-${tick}`))] })
		})
	] });
}
function Closing({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-6 pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto w-[min(280px,70%)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polaroid, {
					photo: CLOSING_PHOTO,
					tape: "center",
					onOpen
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				as: "p",
				className: "mt-8 text-center font-hand text-[1.55rem] leading-snug text-wine",
				children: COPY.signoff
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-14 pb-4 text-center font-display text-sm text-ink-soft",
				children: COPY.footer
			})
		]
	});
}
function Lightbox({ photo, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!photo) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [photo, onClose]);
	if (!photo) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lightbox",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": photo.alt,
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "close-masti",
			style: {
				animationDelay: "0ms",
				opacity: 1
			},
			onClick: onClose,
			"aria-label": "Close photo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				size: 20,
				strokeWidth: 1.75
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `lightbox-card relative ${photo.caption ? "has-cap" : ""}`,
			style: { transform: `rotate(${photo.rotate * .4}deg)` },
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tape",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					alt: photo.alt
				}),
				photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cap",
					children: photo.caption
				}) : null
			]
		})]
	});
}
function Home() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "paper-root",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stage",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onOpen: setActive }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { onOpen: setActive }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masti, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, { onOpen: setActive })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			photo: active,
			onClose: () => setActive(null)
		})]
	});
}
//#endregion
export { Home as component };
