export function exportProgressCard({
  level,
  careerScore,
  xp,
  badgeCount,
  streak,
}) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 675;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#09111f");
  gradient.addColorStop(0.5, "#111827");
  gradient.addColorStop(1, "#251238");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(87, 215, 255, 0.16)";
  for (let i = 0; i < 40; i += 1) {
    const x = (i * 131) % canvas.width;
    const y = (i * 73) % canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 2 + (i % 5), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "#f8fbff";
  ctx.font = "700 56px Segoe UI, Arial";
  ctx.fillText("AI Quest: Engineer Path", 72, 118);
  ctx.fillStyle = "#9aa7bd";
  ctx.font = "400 28px Segoe UI, Arial";
  ctx.fillText("Progress card", 76, 164);

  const statBlocks = [
    ["LEVEL", String(level.level), level.title],
    ["CAREER SCORE", `${careerScore}/100`, "AI readiness"],
    ["TOTAL XP", String(xp), "earned offline"],
    ["BADGES", String(badgeCount), `${streak}-day streak`],
  ];

  statBlocks.forEach(([label, value, detail], index) => {
    const x = 76 + index * 270;
    const y = 265;
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.roundRect(x, y, 230, 250, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.stroke();
    ctx.fillStyle = "#57d7ff";
    ctx.font = "700 20px Segoe UI, Arial";
    ctx.fillText(label, x + 24, y + 48);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 60px Segoe UI, Arial";
    ctx.fillText(value, x + 24, y + 130);
    ctx.fillStyle = "#aeb8ca";
    ctx.font = "400 24px Segoe UI, Arial";
    ctx.fillText(detail, x + 24, y + 180);
  });

  ctx.fillStyle = "#aeb8ca";
  ctx.font = "400 22px Segoe UI, Arial";
  ctx.fillText(
    "Built with daily quests, projects, boss challenges, and career readiness tracking.",
    76,
    600,
  );

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "ai-quest-progress-card.png";
  link.click();
}
