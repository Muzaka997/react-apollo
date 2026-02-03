import styled from "styled-components";

export const Card = styled.div`
  background: var(--card, #fff);
  border-radius: 8px;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
`;

export const Left = styled.div`
  flex: 1;
  margin-right: 12px;
`;

export const Title = styled.a`
  font-weight: 600;
  color: var(--accent, #0366d6);
  text-decoration: none;
`;

export const Desc = styled.p`
  color: var(--muted, #6b7280);
  margin: 6px 0;
  font-size: 13px;
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  color: var(--muted, #6b7280);
  font-size: 13px;
`;

export const Lang = styled.span`
  background: #eef2ff;
  padding: 3px 8px;
  border-radius: 999px;
`;

export const Stars = styled.span`
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StarButton = styled.button<{ starred?: boolean }>`
  background: ${(p) => (p.starred ? "#ff7a2f" : "#ffffff")};
  color: ${(p) => (p.starred ? "#fff" : "#111827")};
  border: ${(p) => (p.starred ? "none" : "1px solid #e5e7eb")};
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  min-width: 76px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(16, 24, 40, 0.08);
  }
  &:focus {
    outline: 2px solid rgba(3, 102, 214, 0.18);
    outline-offset: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;
