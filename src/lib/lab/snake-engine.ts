export type Point = Readonly<{ x: number; y: number }>;
export type Direction = "up" | "down" | "left" | "right";

export const GRID_SIZE = 16;
export const INITIAL_SNAKE: readonly Point[] = [
  { x: 7, y: 8 }, { x: 6, y: 8 }, { x: 5, y: 8 },
];

const vectors: Record<Direction, Point> = {
  up: { x: 0, y: -1 }, down: { x: 0, y: 1 },
  left: { x: -1, y: 0 }, right: { x: 1, y: 0 },
};
const opposites: Record<Direction, Direction> = {
  up: "down", down: "up", left: "right", right: "left",
};

export const canTurn = (current: Direction, next: Direction) => opposites[current] !== next;
export const pointsEqual = (a: Point, b: Point) => a.x === b.x && a.y === b.y;
export function nextHead(head: Point, direction: Direction): Point {
  const vector = vectors[direction];
  return { x: head.x + vector.x, y: head.y + vector.y };
}
export function hasCollision(head: Point, snake: readonly Point[]) {
  return head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE ||
    snake.some((segment) => pointsEqual(segment, head));
}
export function createPacket(snake: readonly Point[], random = Math.random): Point {
  const available: Point[] = [];
  for (let y = 0; y < GRID_SIZE; y += 1) for (let x = 0; x < GRID_SIZE; x += 1) {
    const point = { x, y };
    if (!snake.some((segment) => pointsEqual(segment, point))) available.push(point);
  }
  return available[Math.floor(random() * available.length)] ?? { x: 0, y: 0 };
}
