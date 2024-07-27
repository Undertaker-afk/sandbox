"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export default function DeployButtonModal() {
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = () => {
    if (isDeploying) {
      console.log("Stopping deployment...");

    } else {
      console.log("Starting deployment...");
    }
    setIsDeploying(!isDeploying);
  };

  return (
    <>
      <Button variant="outline" onClick={handleDeploy}>
        {isDeploying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
        {isDeploying ? "Deployed" : "Deploy"}
      </Button>
    </>
  );
}