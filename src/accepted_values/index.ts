import fedramp_extensions from "../content/accepted-value/fedramp-extensions.json"

export const queryExtensions = (binding: string, ns: string) => {
    if (ns === "https://fedramp.gov/ns/oscal") {
        return Object
            .entries(fedramp_extensions.extensions.extensions)
            .filter(([_, extension_data]) =>
                extension_data.bindings.map(x => x.pattern).includes(binding)
            );
    }
}