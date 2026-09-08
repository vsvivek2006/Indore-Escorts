import Link from "next/link";
import Image from "next/image";
import { CompanionModel } from "@/data/models";
import { Phone, MessageCircle } from "lucide-react";

interface ModelCardProps {
  model: CompanionModel;
}

export default function ModelCard({ model }: ModelCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in companion ${model.name} in Indore Escorts. Is service available today?`
  );

  return (
    <div className="member-box">
      <div className="img-block">
        <Link href={`/models/${model.id}`} className="relative block w-full h-full">
          <Image
            src={model.image}
            alt={`${model.name} - Indore Call Girls`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </Link>
        <div className="img-block-overlay" />
        <div className="text-block">
          <Link href={`/models/${model.id}`} className="block">
            <h3 className="member-name">{model.name}</h3>
            <div className="member-age">{model.age} years old</div>
          </Link>
          <div className="escort-icons">
            <a
              href="tel:+919006236133"
              className="phone"
              aria-label={`Call ${model.name}`}
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
            <a
              href={`https://wa.me/919006236133?text=${whatsappMessage}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="whatsapp"
              aria-label={`WhatsApp ${model.name}`}
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
