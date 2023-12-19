import Streamer from "./Streamer";
export default function StreamersList() {
  return (
    <aside className="bg-[#1f2023] h-full flex flex-col gap-1">
      <h3 className="h-10 flex items-center px-3 uppercase text-sm">
        Canales recomendados
      </h3>
      <Streamer
        name="ThePrimeagen"
        isLive
        viewers={2}
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/d96af87b-949c-4074-ace1-48c1f94533b6-profile_image-70x70.png"
      />
      <Streamer
        isLive
        viewers={3}
        name="BaityBait"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/3227ad0b-9efe-49bd-bda9-88f683050a05-profile_image-70x70.png"
      />
      <Streamer
        name="charlesleclerc"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/3eb63655-b9f8-4a9c-ac6d-6715686756ed-profile_image-70x70.png"
      />
      <Streamer
        name="FTotal"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/b888c31e-eaed-402c-82b0-e9854872e868-profile_image-70x70.png"
      />
      <Streamer
        name="Kodemia_mx"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/c57ad6e8-ac8b-436f-a3a2-2f3c9b0e03ad-profile_image-70x70.png"
      />
    </aside>
  );
}
