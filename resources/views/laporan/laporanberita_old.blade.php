@extends('layouts.admin.tabler')
@section('content')
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <div class="page-pretitle">

                    </div>
                    <h2 class="page-title">
                        Laporan Link Berita
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <form action="{{ route('cetaklaporanberita') }}" id="frmLaporanBerita" target="_blank"
                                  method="post">
                                @csrf
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <select name="bulan" id="bulen" class="form-select">
                                                <option value="">-Bulan-</option>
                                                @for($i=1; $i<=12; $i++)
                                                    <option value="{{ $i }}" {{ date('m')==$i?'selected':'' }}>
                                                        {{ $namabulan[$i] }}
                                                    </option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <select name="tahun" id="tahun" class="form-select">
                                                <option value="">-Tahun-</option>
                                                @php
                                                    $tahunmulai = 2022;
                                                    $tahunskrg = date("Y");
                                                @endphp
                                                @for($tahun=$tahunmulai; $tahun<=$tahunskrg; $tahun++)
                                                    <option value="{{ $tahun }}" {{ date('Y')==$tahun?'selected':'' }}>
                                                        {{ $tahun }}
                                                    </option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <select name="kode_satker" id="kode_satker" class="form-select">
                                                <option value="">-Pilih Satker-</option>
                                                @foreach($satker as $d)
                                                    @if($d->roles!='superadmin')
                                                        <option value="{{ $d->kode_satker }}">{{ $d->name }}</option>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <button type="submit" name="cetakberita" id="cetakberita"
                                                    class="btn btn-primary w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     class="icon icon-tabler icon-tabler-printer" width="24" height="24"
                                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                     fill="none"
                                                     stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"/>
                                                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"/>
                                                    <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"/>
                                                </svg>
                                                Cetak
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <button type="submit" name="exportexcelberita" id="exportexcelberita"
                                                    class="btn btn-success w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     class="icon icon-tabler icon-tabler-download" width="24"
                                                     height="24"
                                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                     fill="none"
                                                     stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/>
                                                    <path d="M7 11l5 5l5 -5"/>
                                                    <path d="M12 4l0 12"/>
                                                </svg>
                                                Export to Excel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection