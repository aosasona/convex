export namespace filesystem {
	
	export class Entry {
	    name: string;
	    path: string;
	    ext: string;
	    isDir: boolean;
	    size: number;
	    lastModifiedAt: number;
	
	    static createFrom(source: any = {}) {
	        return new Entry(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.path = source["path"];
	        this.ext = source["ext"];
	        this.isDir = source["isDir"];
	        this.size = source["size"];
	        this.lastModifiedAt = source["lastModifiedAt"];
	    }
	}
	export class FilePath {
	    name: string;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new FilePath(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.path = source["path"];
	    }
	}

}

