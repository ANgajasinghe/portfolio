import Image from "next/image";

export default function KnowledgeIcon() {
  return (
    <div className="d-flex mt-2">
      <div className="mt-3 me-2">
        <Image
          src="/assets/img/azure.png"
          width={30}
          height={30}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-3 me-2">
        <Image
          src="/assets/img/azure-devops.png"
          width={30}
          height={30}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-3 me-2">
        <Image
          src="/assets/img/heroku.png"
          width={30}
          height={30}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-3 me-2">
        <Image
          src="/assets/img/git.png"
          width={30}
          height={30}
          alt="bs Logo"
        ></Image>
      </div>
    </div>
  );
}
