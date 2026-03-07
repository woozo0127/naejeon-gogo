import { User } from 'lucide-react';
import { avatarStyle, avatarImage } from './avatar.css';
import { vars } from '../tokens/theme.css';

const ICON_SIZE = { sm: 16, md: 20, lg: 28 } as const;

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  alt?: string;
};

export function Avatar({ size = 'md', src, alt }: AvatarProps) {
  return (
    <div className={avatarStyle({ size })}>
      {src ? (
        <img className={avatarImage} src={src} alt={alt ?? ''} />
      ) : (
        <User size={ICON_SIZE[size]} color={vars.color.textSecondary} />
      )}
    </div>
  );
}
