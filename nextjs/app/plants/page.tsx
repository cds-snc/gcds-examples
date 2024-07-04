'use client';
import { Heading } from "@/app/components/client/Heading";
import { Card } from "@/app/components/client/Card";
import { GcdsGrid } from "@cdssnc/gcds-components-react-ssr";
export default function Page() {
    const treesList = [
        {name: "Sugar Maple (Acer saccharum)", location: "Eastern Canada", description: "Iconic autumn foliage, maple syrup"},
        {name: "White Spruce (Picea glauca)", location: "Across Canada", description: "Hardy conifer, timber tree"},
        {name: "Eastern White Pine (Pinus strobus)", location: "Eastern Canada", description: "Tall, valuable for timber"},
    ]
    const shrubsList = [
        {name: "Red-osier Dogwood (Cornus sericea)", location: "Across Canada", description: "Red stems, wildlife habitat"},
        {name: "Snowberry (Symphoricarpos albus)", location: "Western Canada", description: "White berries, erosion control"},
    ]
    const flowersList = [
        {name: "Prairie Crocus (Pulsatilla patens)", location: "Prairies of Western Canada", description: "Early spring bloom"},
        {name: "Canada Anemone (Anemone canadensis)", location: "Across Canada", description: "White flowers"},
        {name: "Fireweed (Chamaenerion angustifolium)", location: "Across Canada", description: "Bright pink flowers, pioneer species after fires"},
    ]
    const grassesList = [
        {name: "Big Bluestem (Andropogon gerardii)", location: "Prairies of Western Canada", description: "Tall grass, prairie ecosystem"},
        {name: "Switchgrass (Panicum virgatum)", location: "Prairies and wetlands", description: "Biofuel potential, erosion control"},
    ]

    const plants = [
        {type: "Trees", list: treesList},
        {type: "Shrubs", list: shrubsList},
        {type: "Flowers", list: flowersList},
        {type: "Grasses", list: grassesList},
    ]

    return (
        <main>
            <div>
                <Heading>Plants</Heading>
                {plants.map((plant) => (
                    <div key={plant.type}>
                        <Heading tag="h2">{plant.type}</Heading>
                        <GcdsGrid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
                            {plant.list.map((item) => (
                                <Card key={item.name} title={item.name} href="/" description={item.description} tag={item.location}>
                                </Card>
                            ))}
                        </GcdsGrid>
                    </div>
                    ))}

            </div>
        </main>
    );
}
