import { Image } from './styles';
interface IAvatarProps {
	size: number;
	image: string;
}

export default function Avatar({ size, image }: IAvatarProps) {
	return <Image size={size} src={image} alt="Avatar" />;
}
