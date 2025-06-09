import { sanityFetch } from "@/sanity/lib/live";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { formatNumber } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // updating views
  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping />
      </div>

      <p className='view-text'>
        <span className='font-black'>Views: {formatNumber(totalViews)}</span>
      </p>
    </div>
  );
};

export default View;
