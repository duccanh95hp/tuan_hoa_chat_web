import {
  useNavigate,
  useLocation,
  To,
  NavigateOptions,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
//

export function useRouter() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = useSearchParams();
  const location = useLocation();

  return {
    location,
    navigate,
    search,
    searchParams,
    navigateHost: (to: To, options?: NavigateOptions) => {
      navigate(to, {
        ...(options || {}),
        state: {
          isHostRoute: true,
        },
      });
    },
    createSearchParams,
  };
}
