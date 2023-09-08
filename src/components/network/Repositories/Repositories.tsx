// import { Card } from '@/components/ui/Card/Card';
// import { Slider } from '@/components/ui/Slider/Slider';
// import { getRepositories } from '@/src/utils/fetchUtils';
import { client } from '@/src/graphql';

export async function Repositories() {
  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      name: true,
      pinnedItems: {
        __args: {
          first: 6,
        },
        nodes: {
          on_Repository: {
            id: true,
            name: true,
          },
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div>
      {user.pinnedItems.nodes?.map((respository) => {
        if (!respository) return null;

        return <p key={respository.id}>{respository.name}</p>;
      })}
    </div>
  );

  // const repositories = await getRepositories();

  // return (
  //   <Slider>
  //     {repositories.map((repository, idx) => (
  //       <Card key={idx} src="https://placehold.co/600x400/png">
  //         <h3 className="text-4xl uppercase italic">Card #{idx + 1}</h3>

  //         {Array.from({ length: idx + 1 }, (_, j) => (
  //           <p key={j} className="mt-2">
  //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
  //           </p>
  //         ))}
  //       </Card>
  //     ))}
  //   </Slider>
  // );
}
