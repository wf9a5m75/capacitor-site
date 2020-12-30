// Given a set of provided props and extra props,
// merge to two except for the className prop which is concated
export const applyProps = (props: any, extra: any = {}) => {
  const allKeys = new Set(Object.keys(props).concat(Object.keys(extra)));
  return Array.from(allKeys).reduce((v, k: string) => {
    if (k in extra) {
      if (k === 'className') {
        if (typeof extra[k] === 'string') {
          v[k] = `${extra[k]} ${props[k] ? props[k] : ''}`;
        } else {
          v[k] = {
            ...props[k],
            ...extra[k]
          }
        }
      } else {
        v[k] = extra[k];
      }
    } else if (k in props) {
      v[k] = props[k];
    }
    return v;
  }, {} as any);
};
