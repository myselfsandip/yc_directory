import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";

const SearchForm = ({query} : {query?: string}) => {

    return (
        <Form action="/" formMethod="GET" scroll={false} className="search-form">
            <input name="query" defaultValue={query} className="search-input" placeholder="Search Startups" />
            <div className="flex gap-2">
                {
                    query && (
                        <SearchFormReset />
                    )
                }

                <Button type="submit" className="search-btn text-white">
                    S
                </Button>
            </div>
        </Form>
    )
}

export default SearchForm;