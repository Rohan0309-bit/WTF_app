import type { SVGProps } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from 'next/image';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <Image
      src="https://i.ibb.co/rRJVjyPB/Whats-App-Image-2025-07-10-at-00-14-41.jpg"
      alt="WTF Logo"
      width={props.width ? Number(props.width) : 80}
      height={props.height ? Number(props.height) : 80}
      className={props.className}
      {...props}
    />
  ),
  checkCircle: CheckCircle2,
};
