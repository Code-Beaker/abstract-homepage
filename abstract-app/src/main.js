import {
  buildSrc,
  buildTransformationString,
  upload,
  getResponsiveImageAttributes,
} from "@imagekit/javascript";
import "./style.css";
import "boxicons";

// import { buildTransformationString } from "@imagekit/javascript";
const transformationString = buildTransformationString([
  { width: 300, height: 300 },
  { overlay: { type: "text", text: "Hello World" } },
]);
console.log(transformationString);
// Expected output: "w-300,h-300:l-text,i-Hello%20World,l-end"

buildSrc({
  urlEndpoint: "https://imagekit.io/dashboard/url-endpoints/lksjdf7sd",
  src: "https://ik.imagekit.io/yfkxwgc35/cyberheads/hero-home.jpg?updatedAt=1728301437571",
  transformation: [{ width: 300, height: 300 }, { blur: 10 }],
});
