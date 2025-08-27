// import clsx from "clsx";
// import styles from "./managerlayout.module.css";
// import { useEffect, useState, type ReactNode } from "react";
// import { supabase } from "../../supabase/supabase-client";
// import type { Session } from "@supabase/supabase-js";
// import { Navigate } from "react-router";

// type TypeProps = { children: ReactNode[] };

// export const ManagerLayout: React.FC<TypeProps> = ({ children }) => {
//   const [session, setSession] = useState<Session | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setSession(data.session ?? null);
//       setLoading(false);
//     });

//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//         setSession(session);
//         setLoading(false);
//       }
//     );

//     return () => {
//       listener?.subscription.unsubscribe();
//     };
//   }, []);

//   if (loading) {
//     return <div>Carregando...</div>;
//   }

//   if (!session) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <div className={clsx(`${styles.layout}`)}>
//       <div className={clsx(`${styles.side}`)}>{children[0]}</div>
//       <div className={clsx(`${styles.content}`)}>{children[1]}</div>
//     </div>
//   );
// };
