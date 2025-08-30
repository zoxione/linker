import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  HouseIcon,
  ListIcon,
  LockIcon,
  PencilIcon,
  RotateCcwIcon,
  SendHorizonalIcon,
  Trash2Icon,
  UserCircle2Icon,
} from "lucide-react";

import { GithubIcon } from "./custom-icons/github";
import { GoogleIcon } from "./custom-icons/google";
import { VkIcon } from "./custom-icons/vk";

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

const Icons = {
  loading: (props: IconProps) => <RotateCcwIcon {...props} />,
  send: (props: IconProps) => <SendHorizonalIcon {...props} />,
  left: (props: IconProps) => <ChevronLeftIcon {...props} />,
  up: (props: IconProps) => <ChevronUpIcon {...props} />,
  right: (props: IconProps) => <ChevronRightIcon {...props} />,
  down: (props: IconProps) => <ChevronDownIcon {...props} />,
  arrowLeft: (props: IconProps) => <ArrowLeftIcon {...props} />,
  arrowUp: (props: IconProps) => <ArrowUpIcon {...props} />,
  arrowRight: (props: IconProps) => <ArrowRightIcon {...props} />,
  arrowDown: (props: IconProps) => <ArrowDownIcon {...props} />,
  externalLink: (props: IconProps) => <ExternalLinkIcon {...props} />,
  update: (props: IconProps) => <PencilIcon {...props} />,
  delete: (props: IconProps) => <Trash2Icon {...props} />,
  user: (props: IconProps) => <UserCircle2Icon {...props} />,
  lock: (props: IconProps) => <LockIcon {...props} />,

  // sidebar
  home: (props: IconProps) => <HouseIcon {...props} />,
  links: (props: IconProps) => <ListIcon {...props} />,

  // custom
  github: (props: IconProps) => <GithubIcon {...props} />,
  google: (props: IconProps) => <GoogleIcon {...props} />,
  vk: (props: IconProps) => <VkIcon {...props} />,
};

export { Icons, type IconProps };
