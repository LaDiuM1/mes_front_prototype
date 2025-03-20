import React from "react";
import {
    Build,
    Business,
    Category,
    CheckCircle,
    ElectricBolt,
    Factory,
    Inventory,
    LocalShipping,
    Monitor,
    Settings,
    ShoppingCart,
} from "@mui/icons-material";

const iconMap: { [key: string]: React.FC } = {
    settings: Settings,
    category: Category,
    business: Business,
    inventory: Inventory,
    shoppingCart: ShoppingCart,
    build: Build,
    factory: Factory,
    localShipping: LocalShipping,
    checkCircle: CheckCircle,
    monitor: Monitor,
    electricBolt: ElectricBolt,
};


export default iconMap;
